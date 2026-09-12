import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProvedorTema } from "@/app/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollToTopAndFocus } from "@/components/shared/scroll-to-top";
import { WhatsAppFloatingButton } from "@/components/shared/whatsapp-button";

import { HomePage } from "@/pages/home-page";
import { AboutPage } from "@/pages/about-page";
import { ExperiencePage } from "@/pages/experience-page";
import { ProjectsPage } from "@/pages/projects-page";
import { ProjectDetailPage } from "@/pages/project-detail-page";
import { PortalRhDemoPage } from "@/pages/portal-rh-demo-page";
import { PortalEngenhariaDemoProvider } from "@/context/portal-engenharia-demo-context";
import { PortalEngenhariaDemoPage } from "@/pages/portal-engenharia-demo-page";
import { PortalEngenhariaObraPage } from "@/pages/portal-engenharia-obra-page";
import BankingDemoPage from "@/pages/banking-demo-page";
import ProtheusLabPage from "@/pages/protheus-lab-page";
import { SkillsPage } from "@/pages/skills-page";
import { ContactPage } from "@/pages/contact-page";
import { NotFoundPage } from "@/pages/not-found-page";
import { Outlet } from "react-router-dom";

function PortalEngenhariaDemoLayout() {
  return (
    <PortalEngenhariaDemoProvider>
      <Outlet />
    </PortalEngenhariaDemoProvider>
  );
}

export function AppContent() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-background text-foreground">
      <ScrollToTopAndFocus />

      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo" className="flex-1 focus:outline-none">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/experiencia" element={<ExperiencePage />} />
          <Route path="/projetos" element={<ProjectsPage />} />
          <Route path="/projetos/banking-protheus/demo" element={<BankingDemoPage />} />
          <Route path="/conciliacao-bancaria" element={<BankingDemoPage />} />
          <Route path="/processos-erp" element={<ProtheusLabPage />} />
          <Route path="/laboratorio-protheus" element={<ProtheusLabPage />} />
          <Route path="/projetos/portal-rh/demo" element={<PortalRhDemoPage />} />
          <Route path="/projetos/portal-engenharia/demo" element={<PortalEngenhariaDemoLayout />}>
            <Route index element={<PortalEngenhariaDemoPage />} />
            <Route path="obra/:id" element={<PortalEngenhariaObraPage />} />
          </Route>
          <Route path="/projetos/:slug" element={<ProjectDetailPage />} />
          <Route path="/competencias" element={<SkillsPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <WhatsAppFloatingButton />

      <Footer />
    </div>
  );
}

export function App() {
  return (
    <ProvedorTema>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ProvedorTema>
  );
}
