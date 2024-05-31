import { useState } from "react";
import { Container, Text, VStack, Textarea, Button, Box } from "@chakra-ui/react";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");

  const handleSummarize = () => {
    // Placeholder for summarization logic
    const summarizedText = inputText.split(" ").slice(0, 10).join(" ") + "...";
    setSummary(summarizedText);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">Text Summarizer</Text>
        <Textarea
          placeholder="Paste or type your text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          size="md"
          resize="vertical"
        />
        <Button colorScheme="blue" onClick={handleSummarize}>Summarize</Button>
        {summary && (
          <Box p={4} borderWidth="1px" borderRadius="md" width="100%">
            <Text fontSize="lg" fontWeight="semibold">Summary:</Text>
            <Text mt={2}>{summary}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;