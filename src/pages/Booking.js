import { Text, Title, Section } from 'components/CommonStyles';
import { Outlet } from 'react-router-dom';
import useGlobalState from 'hooks/useGlobalState';
import { ArrowIcon, Button, FlexContainer } from './Booking.styled';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

export default function Booking() {
  const location = useLocation();
  const currentPathname = location.pathname;
  const navigate = useNavigate();
  const { service, appointmentInfo } = useGlobalState();
  const [isUnderMaintenance, setUnderMaintenance] = useState(true);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Secure your spot today with Alina Ivenko! The easy-to-use booking page makes it easy to schedule the desired service at a time convenient for you.  Reserve your appointment now and embark on your next adventure!"
        />
        <meta property="og:title" content="Tattoo Booking" />
        <meta
          property="og:description"
          content="Secure your spot today with Alina Ivenko! The easy-to-use booking page makes it easy to schedule the desired service at a time convenient for you.  Reserve your appointment now and embark on your next adventure!"
        />
        <title>Бронирование татуировок</title>
      </Helmet>
      {isUnderMaintenance ? (
        <Section>
          <Title>🚧 Страница бронирования находится на техническом обслуживании</Title>
          <Text>
            В настоящее время мы модернизируем нашу систему бронирования, чтобы лучше обслуживать вас. Мы
 приносим извинения за причиненные неудобства.{' '}
          </Text>
          <Text>
            А пока запишитесь на прием через прямое сообщение на{' '}
            <a
              href="https://www.instagram.com/grostattoo?igsh=MTdnbnZvamZvcDk0Mg=="
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block' }}
            >
              <Button>Инстаграмм</Button>
            </a>
            или
            <a
              href="https://api.whatsapp.com/send?phone=79990859021&fbclid=PAZXh0bgNhZW0CMTEAAaczQJc7KArvikA7THT_La1zpIH11bkUwtZ7tbiV6MxlbraJ1B3i6h8lwshAZw_aem_32HhnLXg_"
              style={{ display: 'inline-block' }}
            >
              <Button>WhatsApp</Button>
            </a>
            !
          </Text>
        </Section>
      ) : (
        <Section>
          <Title>Booking process</Title>
          <Text>
            To schedule an appointment, complete your information, pick your
            preferred service and starting time, and proceed to secure your
            booking with a deposit. Please be aware that the total service cost
            will be determined based on your specific requirements. The online
            payment serves as a non-refundable deposit, covering preparatory
            expenses for your appointment. This deposit ensures that costs are
            covered in case of a cancellation. For Small Tattoo and Permanent
            services, a deposit of CA$100 is required. For Large Tattoo
            services, the deposit amount is CA$120. All deposits will be
            deducted from the final cost of the service. A minimum of 48 hours'
            notice is necessary to cancel or reschedule a tattoo or cosmetic
            appointment; otherwise, a new deposit might be required.
          </Text>
          <Text>
            <b>Please note:</b> I do not offer finger tattoos, inner lip
            tattoos, or tattoos in intimate areas due to poor healing outcomes.
            Thank you for understanding.
          </Text>

          <FlexContainer>
            <Button
              onClick={() => navigate('/booking/service')}
              active={currentPathname === '/booking/service' ? 'active' : ''}
            >
              Service
            </Button>
            <ArrowIcon />
            <Button
              onClick={() => navigate('/booking/client-info')}
              active={
                currentPathname === '/booking/client-info' ? 'active' : ''
              }
              disabled={!service}
            >
              Client
            </Button>
            <ArrowIcon />
            <Button
              onClick={() => navigate('/booking/schedule')}
              active={currentPathname === '/booking/schedule' ? 'active' : ''}
              disabled={!appointmentInfo}
            >
              Time
            </Button>
            <ArrowIcon />
            <Button
              onClick={() => navigate('/booking/payment')}
              active={currentPathname === '/booking/payment' ? 'active' : ''}
              disabled={!appointmentInfo?.date}
            >
              Payment
            </Button>
          </FlexContainer>
          <Outlet />
        </Section>
      )}
    </>
  );
}
