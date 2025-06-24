import Button from 'components/Button/Button';
import {
  Card,
  Image,
  Item,
  Description,
  CardTitle,
  CardFooter,
} from './ServicesPrices.styled';
import { LinkTo } from './FAQ.styled';
import { Title, Text } from 'components/CommonStyles';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import smallTattoo from '../images/small-tattoo.jpg';
import largeTattoo from '../images/large-tattoo.jpg';
import permanent from '../images/permanent.jpg';
import touchUp from '../images/touch-up.jpg';

export default function Services() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Explore wide range of services and transparent pricing. From Permanent Makeup of lips to Fine line tattoo . Discover the perfect solution for your needs and budget today."
        />
        <meta
          name="keywords"
          content="tattoo, toronto, canada, permanent, makeup, alina ivenko, pricing, services, small, large, consultation, makeup"
        />
        <meta name="author" content="Alina Ivenko" />
        <meta property="og:title" content="Services Provided" />
        <meta
          property="og:description"
          content="Explore wide range of services and transparent pricing. From Permanent Makeup of lips to Fine line tattoo . Discover the perfect solution for your needs and budget today."
        />
        <title>Предоставляемые услуги</title>
      </Helmet>
      <ul>
        <Item>
          <Card>
            <Image src={smallTattoo} alt="small-tattoo" />
            <CardFooter>
              <Description>
                <CardTitle>Маленькая татуировка</CardTitle>
                <p>Диапазон цен: ₽5000-10000</p>
                <p>Депозит: ₽100</p>
                <p>Размер: до 10см</p>
                <p>Длительность: 1.2часа</p>
              </Description>
              <Button
                primary="true"
                onClick={() =>
                  navigate('/booking/service', { state: 'small-tattoo' })
                }
              >
                Забронировать сейчас
              </Button>
            </CardFooter>
          </Card>
          <div>
            <Title>Маленькая татуировка</Title>

            <Text primary="true">
              Маленькая татуировка - это нежный и интимный вид нательного искусства. Например, это может быть фраза, написанная почерком
              любимого человека, или отпечаток лапы в память о любимом питомце. Также
              может быть цветком, символизирующим дату вашего рождения. Однако
              нет никаких ограничений в выборе чего-то очаровательного, например, сердечка, бабочки
              или звезды. В конце концов, маленькая татуировка - это
              возможность выразить свою креативность. Обычно размер таких татуировок
              составляет от 1 до 10 см, они отличаются минимальным количеством деталей и
              требуют продолжительности сеанса до 80 минут.
            </Text>
            <Text primary="true">
              Важно отметить, что если бронирование отменяется менее чем за 48 часов, депозит не возвращается.{' '}
            </Text>
            <Text primary="true">
              <b>
                Минимальная цена небольшой татуировки составляет 5000 рублей, размер 2-3 см.
              </b>{' '}
              Пожалуйста, <LinkTo to="/contact">контакт</LinkTo> для получения более подробной информации.
            </Text>
            <Text primary="true">
              <b>Примечание:</b> Я не предлагаю татуировки на пальцах, внутренней губе
              , а также татуировки в интимных зонах из-за плохого заживления
              . Спасибо за понимание.
            </Text>
          </div>
        </Item>
        <Item>
          <Card>
            <Image src={largeTattoo} alt="large-tattoo" />
            <CardFooter>
              <Description>
                <CardTitle>Большая татуировка</CardTitle>
                <p>Цена: от ₽10000</p>
                <p>Размер: от 10см</p>
                <p>Длительность: 3часа</p>
              </Description>
              <Button
                primary="true"
                onClick={() =>
                  navigate('/booking/service', { state: 'large-tattoo' })
                }
              >
                Забронировать сейчас
              </Button>
            </CardFooter>
          </Card>
          <div>
            <Title>Большая татуировка</Title>
            <Text>
              Если вы хотите элегантно подчеркнуть свою индивидуальность, то большая татуировка
               - идеальный выбор. По сравнению с маленькими татуировками, большие
               отличаются большей детализацией и могут покрывать значительную часть тела
              , если только есть достаточно места для размещения
               рисунка. Они особенно идеальны для талисманов, амулетов и
               чарующих татуировок, имеющих мистическое значение. Учитывая сложность и масштабность
              , такие татуировки могут потребовать нескольких сеансов
               в течение нескольких дней, поскольку они требуют как физической, так и духовной
               подготовки.
            </Text>
            <Text>
              Важно отметить, что если бронирование отменяется менее чем за 48 часов, депозит не возвращается.
            </Text>
            <Text>
              <b>
                Минимальная цена большой татуировки составляет 10000 рублей, размер от 10 см.
              </b>{' '}
              Пожалуйста, <LinkTo to="/contact">контакт</LinkTo> для получения более подробной информации.
            </Text>
          </div>
        </Item>
        <Item>
          <Card>
            <Image src={touchUp} alt="touch-up" />
            <CardFooter>
              <Description>
                <CardTitle>Коррекция</CardTitle>
                <p>Цена: от ₽5000</p>
                <p>Длительность: от 30мин</p>
              </Description>
              <Button
                primary="true"
                onClick={() =>
                  navigate('/booking/service', { state: 'touch-up' })
                }
              >
                Забронировать сейчас
              </Button>
            </CardFooter>
          </Card>

          <div>
            <Title>Консультация/ Коррекция</Title>
            <Text primary="true">
              Процесс консультации происходит в режиме онлайн, где вам нужно будет
               описать свою идею татуировки и поделиться соответствующей фотографией через
               Instagram. Этот первоначальный шаг позволяет мне понять ваше видение
               и обсудить возможности дизайна, прежде чем приступать к дальнейшим действиям.
                            Однако в уникальных ситуациях может быть организована личная встреча,
               особенно если клиент хочет создать индивидуальный и сложный дизайн
              . Для получения дополнительной информации и записи на консультацию
              , пожалуйста, <LinkTo to="/contact">свяжитесь со мной</LinkTo>.
            </Text>
            <Text primary="true"></Text>
            <Text primary="true">
              Важно отметить, что за коррекцию татуировки
             (touch-up) взимается отдельная плата. Кроме того, исправление татуировок обычно
             ограничивается работами, созданными оригинальным тату-мастером.
            </Text>
            <Text primary="true">
              Для получения более подробной информации о процессе коррекции и связанных с ним расходах
             лучше всего обратиться за прямой консультацией.
            </Text>
          </div>
        </Item>
{/*        <Item>*/}
{/*          <Card>*/}
{/*            <Image src={permanent} alt="permanent" />*/}
{/*            <CardFooter>*/}
{/*              <Description>*/}
{/*                <CardTitle>Перманент</CardTitle>*/}
{/*                <p>Депозит: CA$100</p>*/}
{/*                <p>Цена фиксирована CA$300</p>*/}
{/*                <p>Длительность: 1h-3h</p>*/}
{/*              </Description>*/}
{/*              <Button*/}
{/*                primary="true"*/}
{/*                onClick={() =>*/}
{/*                  navigate('/booking/service', { state: 'permanent' })*/}
{/*                }*/}
{/*              >*/}
{/*                Забронировать сейчас*/}
{/*              </Button>*/}
{/*            </CardFooter>*/}
{/*          </Card>*/}
{/*          <div>*/}
{/*            <Title>Перманент</Title>*/}
{/*            <Text>*/}
{/*              Перманентный макияж предлагает на выбор три процедуры: татуаж бровей, ресниц*/}
{/* или губ. Эти процедуры могут быть выполнены*/}
{/* по отдельности или скомбинированы в зависимости от ваших предпочтений. Выбрав*/}
{/* косметический татуаж, вы сможете значительно сократить время*/}
{/* на утренний макияж, гарантируя, что вы всегда*/}
{/* подготовлены и готовы к работе. Во время процедуры используются органические минеральные*/}
{/* пигменты, которые обеспечивают длительный эффект на срок до*/}
{/* - двух лет. Процедуру можно повторять ежегодно для поддержания желаемого результата*/}
{/*. Этот вариант особенно подходит людям с напряженным графиком*/}
{/* и повышенной чувствительностью к традиционной косметике*/}
{/*. Важно отметить, что иногда, примерно через месяц*/}
{/* после процедуры, может потребоваться коррекция, поскольку процедура*/}
{/* затрагивает лицо, а пигмент вводится в верхние слои кожи*/}
{/*, а именно в эпидермис.*/}
{/*            </Text>*/}
{/*            <Text>*/}
{/*              Татуаж бровей призван подчеркнуть естественную форму вашего*/}
{/* лица, избавить от необходимости ежедневного подкрашивания и создать*/}
{/* естественный и непринужденный вид.*/}
{/*            </Text>*/}
{/*            <Text>*/}
{/*              Татуаж губ визуально увеличивает размер губ и выравнивает*/}
{/* их оттенок, обеспечивая гармоничный и долговременный результат.*/}
{/*            </Text>*/}
{/*            <Text>*/}
{/*              Татуаж ресниц направлен на создание тонкой линии между ресницами*/}
{/*, не доводя ее до полного крыла подводки. Эта*/}
{/* техника подчеркивает выразительность ваших глаз и придает*/}
{/* вид более густых ресниц.*/}
{/*            </Text>*/}
{/*          </div>*/}
{/*        </Item>*/}
      </ul>
    </>
  );
}
