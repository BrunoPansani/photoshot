import PromptsListPage from "@/components/pages/prompts/PromptsListPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Prompts Inspiration",
  description:
    "Nosso prompt de IA gratuito abrange uma ampla gama de temas e tópicos para ajudar você a criar um avatar único. Use o tema com nosso Studio ou com seus modelos Stable Diffusion ou Dreambooth.",
};

const PromptsList = () => <PromptsListPage />;

export default PromptsList;
