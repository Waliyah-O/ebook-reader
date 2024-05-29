import { Container, Paper } from "@mui/material";
import { useEffect, useState } from "react";

const EbookReader = ({ bookPath }) => {
  const [bookContent, setBookContent] = useState("");

  useEffect(() => {
    fetch(bookPath)
      .then((response) => response.text())
      .then((content) => setBookContent(content))
      .catch((error) => console.error("Error loading book content:", error));
  }, [bookPath]);

  return (
    <Container>
      <Paper elevation={3} style={{ padding: "20px", whiteSpace: "pre-line" }}>
        {bookContent}
      </Paper>
    </Container>
  );
};

export default EbookReader;
