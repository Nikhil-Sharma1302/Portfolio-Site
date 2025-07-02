import { Container, Typography, Box, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const Footer = () => {
  return (
    <footer className="bg-[#0c1a2e] text-white py-8 border-t border-gray-700">
      <Container maxWidth="md">
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Box display="flex" gap={3} justifyContent="center" flexWrap="wrap" mt={1}>
            <Link
              href="https://github.com/Nikhil-Sharma1302"
              target="_blank"
              rel="noopener"
              color="inherit"
              underline="none"
              sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <GitHubIcon sx={{ color: '#cbd5e1' }} />
              <Typography variant="body2" color="gray">GitHub</Typography>
            </Link>

            <Link
              href="https://linkedin.com/in/nikhil-webdev"
              target="_blank"
              rel="noopener"
              color="inherit"
              underline="none"
              sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <LinkedInIcon sx={{ color: '#0ea5e9' }} />
              <Typography variant="body2" color="gray">LinkedIn</Typography>
            </Link>

            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nikhil7507013249@gmail.com"
              target="_blank"
              rel="noopener"
              color="inherit"
              underline="none"
              sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <EmailIcon sx={{ color: '#facc15' }} />
              <Typography variant="body2" color="gray">Email</Typography>
            </Link>

            <Link
              href="tel:+917597013249"
              color="inherit"
              underline="none"
              sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <PhoneAndroidIcon sx={{ color: '#4ade80' }} />
              <Typography variant="body2" color="gray">+91 7597013249</Typography>
            </Link>
          </Box>

          <Typography
            variant="body2"
            color="gray"
            sx={{ mt: 3, fontSize: '0.8rem', textAlign: 'center' }}
          >
            © {new Date().getFullYear()} Nikhil Sharma. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
