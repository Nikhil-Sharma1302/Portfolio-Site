import {
  TextField,
  Button,
  Box,
  Container,
  Typography,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  return (
    <section id="contact" className="py-20 bg-[#0f172a] text-white">
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              backgroundColor: "#1e293b",
              borderRadius: "16px",
              border: "1px solid #22d3ee",
            }}
          >
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ color: "#22d3ee", fontWeight: "bold" }}
            >
              Contact Me
            </Typography>

            <Typography
              variant="body1"
              align="center"
              gutterBottom
              sx={{ color: "#cbd5e1" }}
            >
              Have a project in mind or just want to say hello? Let's connect.
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ mt: 4 }}
              noValidate
            >
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                required
                margin="normal"
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor: "#0f172a",
                    color: "#fff",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#22d3ee",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#cbd5e1",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Your Email"
                type="email"
                variant="outlined"
                required
                margin="normal"
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor: "#0f172a",
                    color: "#fff",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#22d3ee",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#cbd5e1",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                required
                margin="normal"
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor: "#0f172a",
                    color: "#fff",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#22d3ee",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#cbd5e1",
                  },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  backgroundColor: "#22d3ee",
                  color: "#0f172a",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#0ea5e9",
                  },
                }}
              >
                Send Message
              </Button>
            </Box>

            <Box mt={3} textAlign="center">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nikhil7507013249@gmail.com"
                target="_blank"
                className="text-cyan-400 hover:underline text-sm"
              >
                or say hello via email
              </a>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
