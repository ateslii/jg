import WaiverForm from 'components/WaiverForm/WaiverForm';
import { Title, Text, Section } from 'components/CommonStyles';
import { Helmet } from 'react-helmet-async';

export default function Waiver() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Waiver form is designed to protect both parties involved and outline the terms and conditions of your engagement with me. Ensure clarity, transparency, and legal compliance with the waiver document."
        />
        <meta property="og:title" content="Tattoo Waiverform" />
        <meta
          property="og:description"
          content="Waiver form is designed to protect both parties involved and outline the terms and conditions of your engagement with me. Ensure clarity, transparency, and legal compliance with the waiver document."
        />
        <title>Форма отказа от татуировки/консент</title>
      </Helmet>
      <Section>
        <Title>
          Согласие на нанесение татуировки/перманентного макияжа и освобождение и
 от всех претензий
        </Title>
        <Text>
          ВАЖНОЕ УВЕДОМЛЕНИЕ: ПОДПИСЫВАЯ ЭТУ ФОРМУ ОТКАЗА ОТ ТАТУИРОВКИ, ВЫ ОТКАЗЫВАЕТЕСЬ ОТ
 ВАЖНЫХ ЮРИДИЧЕСКИХ ПРАВ. ВНИМАТЕЛЬНО ПРОЧИТАЙТЕ ЭТОТ ДОКУМЕНТ И ПРИ НЕОБХОДИМОСТИ ОБРАТИТЕСЬ ЗА ЮРИДИЧЕСКОЙ
 КОНСУЛЬТАЦИЕЙ, ПРЕЖДЕ ЧЕМ ПОДПИСЫВАТЬ ЕГО.
        </Text>
        <WaiverForm />
      </Section>
    </>
  );
}
