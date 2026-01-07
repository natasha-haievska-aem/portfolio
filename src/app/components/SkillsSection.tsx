import { Card, Progress } from 'antd';
import { useRole } from './RoleContext';
import { skillsData } from '../data/roleData';

export function SkillsSection() {
  const { role } = useRole();
  const skillCategories = skillsData[role];

  return (
    <section id="skills" className="py-6 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Skills & Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                title={<h3 className="mb-0">{category.title}</h3>}
                className="hover:shadow-lg transition-shadow"
              >
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress
                        percent={skill.level}
                        showInfo={false}
                        strokeColor={{
                          '0%': '#6366f1',
                          '100%': '#a5b4fc',
                        }}
                        size="small"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
