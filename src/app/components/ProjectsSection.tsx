import { Card, Button, Tag, Space, Carousel } from "antd";
import {
  LinkOutlined,
  GithubOutlined,
  StarFilled,
  SmileOutlined,
  HeartOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { useRole } from "./RoleContext";
import { projectsData } from "../data/roleData";
import { useRef } from "react";
import type { CarouselRef } from "antd/es/carousel";

const badgeConfig = {
  featured: {
    text: "Featured",
    color: "purple",
    icon: <StarFilled className="mr-1" />,
  },
  fun: {
    text: "Fun Project",
    color: "cyan",
    icon: <SmileOutlined className="mr-1" />,
  },
  personal: {
    text: "Personal",
    color: "blue",
    icon: <HeartOutlined className="mr-1" />,
  },
  "under NDA": {
    text: "Under NDA",
    color: "red",
    icon: <LockOutlined className="mr-1" />,
  },
};

export function ProjectsSection() {
  const { role } = useRole();
  const projects = projectsData[role];
  const carouselRef = useRef<CarouselRef>(null);

  const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
    const badges = project.badge || [];
    const { role } = useRole();

    return (
      <div className="px-2 my-12">
        <Card
          key={index}
          hoverable
          className="overflow-hidden flex flex-col h-[85%]"
          cover={
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
              {/* Badge overlay */}
              {badges.length > 0 && (
                <div className="absolute top-2 right-2 flex flex-col gap-1">
                  {badges.map((badge, badgeIndex) => {
                    const config = badgeConfig[badge];
                    return (
                      <Tag key={badgeIndex} color={config.color} className="m-0 flex items-center">
                        {config.icon}
                        {config.text}
                      </Tag>
                    );
                  })}
                </div>
              )}
            </div>
          }
          styles={{ body: { flex: 1, display: "flex", flexDirection: "column" } }}
        >
          <h3 className="mb-3">{project.title}</h3>
          <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
          <Space wrap className="mb-4 max-h-20 overflow-auto">
            {project.tags.map((tag, tagIndex) => (
              <Tag key={tagIndex} color={role === "fullStackDev" ? "blue" : "green"}>
                {tag}
              </Tag>
            ))}
          </Space>
          <Space className="w-full min-h-10">
            {project.github && (
              <Button
                icon={<GithubOutlined />}
                href={project.github}
                target="_blank"
                className="flex-1"
              >
                Code
              </Button>
            )}
            {project.demo && (
              <Button
                type="primary"
                icon={<LinkOutlined />}
                href={project.demo}
                target="_blank"
                className="flex-1"
              >
                Demo
              </Button>
            )}
          </Space>
        </Card>
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-6 md:py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work showcasing different aspects of my expertise, from
              responsive design to complex systems integration.
            </p>
          </div>

          {/* Carousel Navigation */}

          <div className="px-8">
            <Carousel
              ref={carouselRef}
              dots={{ className: "mb-6" }}
              dotPlacement="top"
              slidesToShow={3}
              slidesToScroll={1}
              autoplay
              autoplaySpeed={5000}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                  },
                },
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 1,
                  },
                },
              ]}
            >
              {projects.map((project, index) => (
                <ProjectCard project={project} index={index} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
