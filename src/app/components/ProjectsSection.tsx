import { Card, Button, Tag, Badge, Space, Carousel } from 'antd';
import { LinkOutlined, GithubOutlined, StarFilled } from '@ant-design/icons';
import { useRole } from './RoleContext';
import { projectsData } from '../data/roleData';
import { useRef } from 'react';
import type { CarouselRef } from 'antd/es/carousel';

export function ProjectsSection() {
  const { role } = useRole();
  const projects = projectsData[role];
  const carouselRef = useRef<CarouselRef>(null);

  const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
    const cardContent = (
      <Card
        hoverable
        className="overflow-hidden flex flex-col h-full mx-2"
        cover={
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        }
        styles={{ body: { flex: 1, display: 'flex', flexDirection: 'column' } }}
      >
        <h3 className="mb-3">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-1">
          {project.description}
        </p>
        <Space wrap className="mb-4">
          {project.tags.map((tag, tagIndex) => (
            <Tag key={tagIndex} color="purple">
              {tag}
            </Tag>
          ))}
        </Space>
        <Space className="w-full">
          {project.github && (
            <Button icon={<GithubOutlined />} href={project.github} className="flex-1">
              Code
            </Button>
          )}
          {project.demo && (
            <Button type="primary" icon={<LinkOutlined />} href={project.demo} className="flex-1">
              Demo
            </Button>
          )}
        </Space>
      </Card>
    );

    return project.featured ? (
      <Badge.Ribbon
        key={index}
        text={
          <span>
            <StarFilled className="mr-1" />
            Featured
          </span>
        }
        color="purple"
      >
        {cardContent}
      </Badge.Ribbon>
    ) : (
      cardContent
    );
  };

  return (
    <section id="portfolio" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work showcasing different aspects of my expertise,
              from responsive design to complex systems integration.
            </p>
          </div>

          {/* Carousel Navigation */}

            <div className="px-8 pb-4">
              <Carousel
                ref={carouselRef}
                dots={{ className: 'mb-6' }}
                dotPlacement="top"
                slidesToShow={2}
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
                  <div key={index} className="px-2 mt-12">
                    <ProjectCard project={project} index={index} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
      </div>
    </section>
  );
}