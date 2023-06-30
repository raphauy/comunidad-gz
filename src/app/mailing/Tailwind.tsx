import { Body, Button, Container, Column, Head, Heading, Hr, Html, Img, Link, Preview, Row, Section, Tailwind, Text } from '@react-email/components'

export default function TailwindEmail() {
    const name= "Juancito"
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: '#007291',
            },
          },
        },
      }}
    >
          <Container className="border border-solid border-[#eaeaea] my-[40px] w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`https://gabizimmer.com/wp-content/uploads/2020/09/GZ_LogotipoVI_verdeoscuro-e1600688360505.png.webp`}
                width="200"
                height="75"
                alt="Gabi Zimmer"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Hola <strong>{name}</strong> on <strong>GZ page</strong>
            </Heading>
            <Text className="text-black p-4 text-[14px] leading-[24px]">
              Este es un newsletter de GZ
            </Text>
            <Section>
              <Row>
                <Column align="center">
                  <Img className="rounded-full" src={`https://gabizimmer.com/wp-content/uploads/2022/12/DSC04989-e1670593701762-800x806.jpg.webp`} width="64" height="64" />
                </Column>
              </Row>
            </Section>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                pX={20}
                pY={12}
                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center"
                href="https://gabizimmer.com"
              >
                gabizimmer.com
              </Button>
            </Section>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px] p-4">
              This invitation was intended for{' '}
              expecting this invitation, you can ignore this email. If you are
              concerned about your accounts safety, please reply to this email to
              get in touch with us.
            </Text>
          </Container>
    </Tailwind>
  );
};
