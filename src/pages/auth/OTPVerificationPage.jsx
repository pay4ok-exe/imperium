import React, { useState, useEffect, useRef } from 'react';
import {
  Card,
  Button,
  Typography,
  message,
  Space,
  Statistic,
  Result
} from 'antd';
import {
  SafetyOutlined,
  PhoneOutlined,
  MailOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  ReloadOutlined
} from '@ant-design/icons';
import { useTranslation } from '../../hooks/useTranslation';

const { Title, Text, Paragraph } = Typography;
const { Countdown } = Statistic;

const OTPVerificationPage = ({ 
  onNavigate, 
  onVerifySuccess,
  contactInfo = { phone: '+7 (777) 123-45-67', email: 'user@example.com' },
  verificationType = 'registration' // 'registration', 'login', 'password-reset'
}) => {
  const { t, language } = useTranslation();
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [loading, setLoading] = useState(false);
  const [canResend, setCanResend] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const inputRefs = useRef([]);

  const deadline = Date.now() + 1000 * 60 * 2; // 2 minutes

  useEffect(() => {
    // Focus first input on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.value !== '' && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (otp[index] === '' && index > 0) {
        inputRefs.current[index - 1].focus();
      }
      setOtp([...otp.map((d, idx) => (idx === index ? '' : d))]);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    const pastedArray = pastedData.split('').slice(0, 6);
    
    setOtp([
      ...pastedArray,
      ...new Array(6 - pastedArray.length).fill('')
    ]);

    // Focus the next empty input or last input
    const nextIndex = Math.min(pastedArray.length, 5);
    inputRefs.current[nextIndex].focus();
  };

  const handleVerify = async () => {
    const otpValue = otp.join('');
    
    if (otpValue.length !== 6) {
      message.error(
        language === 'kz' 
          ? '6 таңбалы кодты толық енгізіңіз'
          : 'Введите полный 6-значный код'
      );
      return;
    }

    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate verification (demo: accept any 6-digit code)
      if (otpValue === '000000') {
        throw new Error('Invalid OTP');
      }

      setIsVerified(true);
      
      message.success({
        content: language === 'kz' ? 'Код сәтті расталды!' : 'Код успешно подтвержден!',
        duration: 3,
      });

      // Wait a bit to show success state, then proceed
      setTimeout(() => {
        if (onVerifySuccess) {
          onVerifySuccess();
        }
        
        // Navigate based on verification type
        if (onNavigate) {
          switch (verificationType) {
            case 'registration':
              onNavigate('/login');
              break;
            case 'login':
              onNavigate('/');
              break;
            case 'password-reset':
              onNavigate('/reset-password');
              break;
            default:
              onNavigate('/');
          }
        }
      }, 2000);
      
    } catch (error) {
      message.error({
        content: t('auth.invalidOtp'),
        duration: 3,
      });
      // Clear OTP on error
      setOtp(new Array(6).fill(''));
      inputRefs.current[0].focus();
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResendLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      message.success(
        language === 'kz' 
          ? 'Жаңа код жіберілді'
          : 'Новый код отправлен'
      );
      
      setCanResend(false);
      // Reset countdown
      setTimeout(() => setCanResend(true), 120000); // 2 minutes
      
    } catch (error) {
      message.error(
        language === 'kz' 
          ? 'Код жіберу қатесі'
          : 'Ошибка отправки кода'
      );
    } finally {
      setResendLoading(false);
    }
  };

  const handleCountdownFinish = () => {
    setCanResend(true);
  };

  const getTitle = () => {
    switch (verificationType) {
      case 'registration':
        return language === 'kz' ? 'Тіркелуді растау' : 'Подтверждение регистрации';
      case 'login':
        return language === 'kz' ? 'Кіруді растау' : 'Подтверждение входа';
      case 'password-reset':
        return language === 'kz' ? 'Құпия сөзді қалпына келтіру' : 'Восстановление пароля';
      default:
        return t('auth.otpVerification');
    }
  };

  const getDescription = () => {
    switch (verificationType) {
      case 'registration':
        return language === 'kz' 
          ? 'Тіркелуді аяқтау үшін кодты енгізіңіз'
          : 'Введите код для завершения регистрации';
      case 'login':
        return language === 'kz' 
          ? 'Қауіпсіз кіру үшін кодты енгізіңіз'
          : 'Введите код для безопасного входа';
      case 'password-reset':
        return language === 'kz' 
          ? 'Құпия сөзді өзгерту үшін кодты енгізіңіз'
          : 'Введите код для смены пароля';
      default:
        return language === 'kz' 
          ? 'Растау кодын енгізіңіз'
          : 'Введите код подтверждения';
    }
  };

  if (isVerified) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Result
            status="success"
            title={
              <Title level={2} className="text-green-600">
                {language === 'kz' ? 'Сәтті расталды!' : 'Успешно подтверждено!'}
              </Title>
            }
            subTitle={
              <Text className="text-lg">
                {language === 'kz' 
                  ? 'Сіз жүйеге сәтті кірдіңіз'
                  : 'Вы успешно прошли верификацию'
                }
              </Text>
            }
            icon={<CheckCircleOutlined className="text-green-500" />}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-4xl">🏛️</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Imperium
            </span>
          </div>
        </div>

        <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafetyOutlined className="text-white text-2xl" />
              </div>
              
              <Title level={2} className="text-gray-900 mb-2">
                {getTitle()}
              </Title>
              <Paragraph type="secondary" className="text-base">
                {getDescription()}
              </Paragraph>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-xl p-4 mb-8">
              <div className="text-center">
                <Text type="secondary" className="block mb-2">
                  {t('auth.otpSent')}:
                </Text>
                <Space direction="vertical" size="small">
                  {contactInfo.phone && (
                    <div className="flex items-center justify-center space-x-2">
                      <PhoneOutlined className="text-indigo-500" />
                      <Text strong>{contactInfo.phone}</Text>
                    </div>
                  )}
                  {contactInfo.email && (
                    <div className="flex items-center justify-center space-x-2">
                      <MailOutlined className="text-indigo-500" />
                      <Text strong>{contactInfo.email}</Text>
                    </div>
                  )}
                </Space>
              </div>
            </div>

            {/* OTP Input */}
            <div className="mb-8">
              <Text strong className="block mb-4 text-center">
                {t('auth.enterOtp')}
              </Text>
              <div className="flex justify-center space-x-3">
                {otp.map((data, index) => (
                  <input
                    key={index}
                    ref={el => inputRefs.current[index] = el}
                    type="text"
                    maxLength="1"
                    value={data}
                    onChange={e => handleChange(e.target, index)}
                    onKeyDown={e => handleKeyDown(e, index)}
                    onPaste={handlePaste}
                    className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors duration-200"
                    disabled={loading}
                  />
                ))}
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="text-center mb-6">
              {!canResend ? (
                <div className="flex items-center justify-center space-x-2">
                  <ClockCircleOutlined className="text-gray-400" />
                  <Text type="secondary">
                    {language === 'kz' ? 'Қайта жіберу: ' : 'Повторная отправка: '}
                  </Text>
                  <Countdown
                    value={deadline}
                    format="mm:ss"
                    onFinish={handleCountdownFinish}
                    valueStyle={{ fontSize: '14px', color: '#6b7280' }}
                  />
                </div>
              ) : (
                <Button
                  type="link"
                  icon={<ReloadOutlined />}
                  loading={resendLoading}
                  onClick={handleResend}
                  className="text-indigo-500 font-semibold"
                >
                  {t('auth.resendOtp')}
                </Button>
              )}
            </div>

            {/* Verify Button */}
            <Button
              type="primary"
              size="large"
              loading={loading}
              onClick={handleVerify}
              disabled={otp.join('').length !== 6}
              block
              className="bg-gradient-to-r from-indigo-500 to-purple-500 border-0 rounded-xl h-12 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 mb-6"
            >
              {loading ? t('common.loading') : t('auth.verify')}
            </Button>

            {/* Help Text */}
            <div className="text-center text-sm text-gray-500 bg-blue-50 rounded-lg p-3">
              <Text type="secondary">
                {language === 'kz' 
                  ? 'Код алмадыңыз ба? Спам папкасын тексеріңіз немесе SMS күтіңіз'
                  : 'Не получили код? Проверьте папку спам или подождите SMS'
                }
              </Text>
            </div>

            <div className="text-center mt-6 pt-6 border-t border-gray-100">
              <Text type="secondary">
                {language === 'kz' ? 'Артқа оралу' : 'Вернуться назад'} {' '}
                <Button
                  type="link"
                  className="text-indigo-500 font-semibold p-0"
                  onClick={() => onNavigate && onNavigate(-1)}
                >
                  {verificationType === 'registration' ? t('auth.signUp') : t('auth.signIn')}
                </Button>
              </Text>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <Text type="secondary" className="text-sm">
            {language === 'kz' 
              ? '© 2024 Imperium. Барлық құқықтар қорғалған.'
              : '© 2024 Imperium. Все права защищены.'
            }
          </Text>
        </div>
      </div>
    </div>
  );
};

export default OTPVerificationPage;