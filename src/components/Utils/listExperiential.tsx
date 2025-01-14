import IconFreela from "../../assets/images/IconFreela";

type TlistExperiential = {
  title: string;
  slug: string;
  description: string;
  type: "freelancer" | "CLT";
  duration: string;
  link?: string;
  image?: string;
  icon?: JSX.Element;
  tags: string[];
};

export default function listExperiential(): TlistExperiential[] {
  return [
    {
      title: "BlogAceffong",
      slug: "blog, ong",
      description:
        "Desenvolvi um blog para uma ONG usando React, Strapi e PostgreSQL, com foco em uma plataforma simples e eficiente para gerenciar e publicar conteúdos. Utilizei React para criar uma interface dinâmica e responsiva, Strapi pela flexibilidade no gerenciamento de posts e PostgreSQL para garantir segurança e eficiência no armazenamento. O deploy foi realizado no Railway, permitindo hospedar front-end e back-end de forma rápida e escalável.",
      type: "freelancer",
      duration: "1 mês",
      image: <IconFreela />,
      link: "teste.com",
      tags: ["react.js", "strapi", "railway", "postgree"],
    },
    {
      title: "des.freelancer",
      slug: "sistema industrial de monitoramento",
      description:
        "Desenvolvi um sistema de controle produtivo industrial com operações de CRUD utilizando Redux Saga e integrações com React Query. Segui a arquitetura Atomic Design para garantir uma estrutura escalável e organizada, e utilizei componentes da MUI para criar uma interface moderna e responsiva. Além do desenvolvimento inicial, fiz integrações com a API para garantir que o sistema fosse capaz de comunicar e processar dados de maneira eficiente. Também realizei a manutenção contínua do sistema, implementando melhorias e corrigindo problemas para garantir o bom funcionamento e a evolução do projeto ao longo do tempo. O foco foi criar uma solução eficiente e de fácil manutenção, adaptada às necessidades do controle de produção industrial.",
      duration: "11-2023 - 08-2024",
      type: "freelancer",
      icon: <IconFreela />,
      tags: ["Redux saga", "MUI", "Atomic Design", "React Query"],
    },
  ];
}
