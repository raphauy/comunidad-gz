
import { Button, Column, Container, Heading, Hr, Img, Row, Section, Tailwind, Text } from '@react-email/components';
import { Markdown } from '../newsletters/preview/markdown';
import { color } from '@cloudinary/url-gen/qualifiers/background';
interface Props{
  title: string
  text: string
  name: string
}
export default function SimpleTemplate({ title, text, name }: Props) {

  const parsedText= text.replace("{name}", `${name}`)

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
          <div className="border mx-[50px] p-[50px] border-solid border-[#eaeaea] my-[40px] ">
            <Section className="mt-[10px]">
              <Img
                src={`https://gabizimmer.com/wp-content/uploads/2020/09/GZ_LogotipoVI_verdeoscuro-e1600688360505.png.webp`}
                width="200"
                height="75"
                alt="Gabi Zimmer"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="text-gray-500 text-[28px] font-bold text-center p-0 my-[30px] mx-0">
              {title}
            </Heading>
            <Markdown
                markdownCustomStyles={{
                  h2: { color: "#35472A", fontSize: "20px", fontWeight: "bold", margin: "16px 0px 2px 0px" },
                }}
                markdownContainerStyles={{
                  textAlign: "justify",
                  color: "#6B7280"
                }}
            >
              {parsedText}
            </Markdown>
            <Section className='flex justify-center mt-16'>
              <Img className="rounded-full" src={`https://gabizimmer.com/wp-content/uploads/2022/12/DSC04989-e1670593701762-800x806.jpg.webp`} width="64" height="64" />
            </Section>
            <Section className="text-center mt-[20px] mb-[32px]">
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
              Texto diciendo que si no solicitaste el mail bla bla bla
            </Text>
          </div>
    </Tailwind>
  );
};
