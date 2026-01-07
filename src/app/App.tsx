import { ConfigProvider, theme as antdTheme } from 'antd';
import { ThemeProvider, useTheme } from './components/ThemeProvider';
import { RoleProvider } from './components/RoleContext';
import { Header } from './components/Header';
import { ProfileCard } from './components/ProfileCard';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';

function AppContent() {
  const { theme } = useTheme();

  return (
    <ConfigProvider
      theme={{
        algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: '#6366f1',
          borderRadius: 10,
          fontFamily: 'inherit',
        },
      }}
    >
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <ProfileCard />
          <SkillsSection />
          <ProjectsSection />
        </main>
        <footer className="py-8 border-t bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()}
              <span> </span>
              <span className="font-bold relative">N</span>
              <span className="font-bold relative -ml-1">H</span>. Built with React & Ant Design.
            </p>
          </div>
        </footer>
      </div>
    </ConfigProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <RoleProvider>
        <AppContent />
      </RoleProvider>
    </ThemeProvider>
  );
}
