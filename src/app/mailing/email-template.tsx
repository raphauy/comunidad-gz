interface EmailTemplateProps {
  firstName: string;
}

export function EmailTemplate({ firstName }: Readonly<EmailTemplateProps>) {
  return (
    <div>
      <h1>Hola, {firstName}!</h1>
    </div>
  );
}

export default EmailTemplate;
