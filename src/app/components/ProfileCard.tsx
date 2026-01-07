import { Card, Button, Tag, Avatar, Row, Col, Statistic, Tabs } from "antd";
import {
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
  CodeOutlined,
  AppstoreOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import { useRole, type RoleKey } from "./RoleContext";
import { profileData } from "../data/roleData";
import avatar from "@/assets/images/avatar.jpg";

export function ProfileCard() {
  const { role, setRole } = useRole();
  const data = profileData[role];

  const tabItems = [
    {
      key: "fullStackDev" as RoleKey,
      label: (
        <span>
          <CodeOutlined className="mr-1" />
          Full-Stack Developer
        </span>
      ),
    },
    {
      key: "emEng" as RoleKey,
      label: (
        <span>
          <ToolOutlined className="mr-1" />
          Electromechanical Engineer
        </span>
      ),
    },
  ];

  return (
    <section id="about" className="py-6 md:py-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Role Tabs */}
        <Tabs
          activeKey={role}
          onChange={(key) => setRole(key as RoleKey)}
          items={tabItems}
          type="card"
          size="large"
        />

        <Card
          className="mx-auto shadow-xl justify-center"
          styles={{
            body: { padding: "2rem 3rem" },
          }}
          style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0, borderTop: "none" }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Profile Photo */}
            <div id="contact">
              <div className="flex flex-col flex-shrink-0 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                <Avatar
                  src={avatar}
                  alt="Profile"
                  size={256}
                  className="relative border-4 border-background shadow-2xl ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all"
                />
                <div className="absolute top-2 right-2 bg-green-500 h-6 w-6 rounded-full border-4 border-background" />
              </div>
              {/* Contact Links */}
              <div className="w-full flex flex-col gap-3 mt-4">
                <Button
                  type="primary"
                  size="large"
                  icon={<MailOutlined />}
                  href="mailto:nataliia.haievska@gmail.com"
                  block
                >
                  Get in Touch
                </Button>
                <Button
                  size="large"
                  icon={<GithubOutlined />}
                  href="https://github.com/natasha-haievska-aem"
                  target="_blank"
                  block
                >
                  GitHub
                </Button>
                <Button
                  size="large"
                  icon={<LinkedinOutlined />}
                  href="https://www.linkedin.com/in/nataliia-haievska-38129780/"
                  target="_blank"
                  block
                >
                  LinkedIn
                </Button>
                <Button
                  size="large"
                  icon={<WhatsAppOutlined />}
                  href="https://wa.me/380991908845"
                  target="_blank"
                  block
                >
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Profile Content */}
            <div className="flex-1 text-center md:text-left">
              <Tag color={role === "fullStackDev" ? "blue" : "green"}>
                {role === "fullStackDev" ? (
                  <CodeOutlined className="mr-1" />
                ) : (
                  <ToolOutlined className="mr-1" />
                )}
                {data.tagline}
              </Tag>
              <h1 className="mb-2">Nataliia Haievska</h1>
              <p className="text-xl text-primary mb-6">{data.title}</p>

              <Row gutter={16} className="mx-auto md:mx-0 mb-6 p-2 rounded-lg bg-muted/30">
                <Col span={12} className="text-center">
                  <Statistic
                    title={<span className="text-xs text-muted-foreground">Years Exp.</span>}
                    value={data.stats.experience}
                    prefix={<CodeOutlined className="text-primary" />}
                    styles={{ content: { fontSize: "1rem", fontWeight: 600 } }}
                  />
                </Col>
                <Col span={12} className="text-center">
                  <Statistic
                    title={<span className="text-xs text-muted-foreground">Projects</span>}
                    value={data.stats.projects}
                    prefix={<AppstoreOutlined className="text-primary" />}
                    styles={{ content: { fontSize: "1rem", fontWeight: 600 } }}
                  />
                </Col>
              </Row>

              {data.description.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground mb-4 max-w-2xl">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
