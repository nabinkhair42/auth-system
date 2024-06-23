import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
} from '@react-email/components';

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({ username, otp }: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>
        <Font
          fontFamily="Poppins"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJnecmNE.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Your verification code: {otp}</Preview>
      <Section>
        <Row>
          <Heading 
            as="h2" 
            style={{ 
              fontFamily: 'Poppins, Roboto, sans-serif', 
              fontWeight: 700, 
              fontSize: '24px', 
              margin: '0 0 20px' 
            }}
          >
            Hello {username},
          </Heading>
        </Row>
        <Row>
          <Text 
            style={{ 
              fontFamily: 'Poppins, Roboto, sans-serif', 
              fontSize: '16px', 
              lineHeight: '1.5', 
              margin: '0 0 10px' 
            }}
          >
            Thank you for registering. Please use the following verification code to complete your registration:
          </Text>
        </Row>
        <Row>
          <Text 
            style={{ 
              fontFamily: 'Poppins, Roboto, sans-serif', 
              fontWeight: 700, 
              fontSize: '18px', 
              margin: '0 0 20px' 
            }}
          >
            {otp}
          </Text>
        </Row>
        <Row>
          <Text 
            style={{ 
              fontFamily: 'Poppins, Roboto, sans-serif', 
              fontSize: '16px', 
              lineHeight: '1.5', 
              margin: '0 0 10px' 
            }}
          >
            If you did not request this code, please ignore this email.
          </Text>
        </Row>
        <Row>
          <Button
            href={`http://localhost:3000/verify/${username}`}
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              backgroundColor: '#007BFF',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '5px',
              fontFamily: 'Poppins, Roboto, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            Verify Here
          </Button>
        </Row>
      </Section>
    </Html>
  );
}
