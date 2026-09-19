import styles from "./TechStack.module.css";

const stacks = {
  hardware: ["Embedded Systems", "PCB Design", "Sensors", "Microcontrollers", "Communication Protocols", "Digital Twins", "IoT Gateways", "Edge Computing"],
  ai: ["LLMs", "RAG", "Agentic Engineering", "Feature Engineering", "Time Series Analysis", "Predictive Maintenance"],
  software: ["Python", "TypeScript", "React", "Next.js", "Django", "FastAPI", "PostgreSQL", "REST APIs", "Docker", "Git", "Retool", "Azure"],
  engineering: ["CAD", "CFD", "FEA", "OpenFOAM", "SolidWorks", "Three.js", "Meta Quest", "Blender", "MATLAB", "Simulink", "Control Systems"],
  applications: ["Web", "Mobile", "3D Visualization", "XR", "Digital Twins", "Device Control", "Real-time Data"],
};

function StackCard({
  title,
  subtitle,
  items,
  className = "",
}: {
  title: string;
  subtitle: string;
  items: string[];
  className?: string;
}) {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.cardHeader}>
        <span className={styles.dot} />
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>

      <div className={styles.items}>
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className={styles.section} aria-label="Tech stack">
    
      <div className={styles.system}>
        {/* Engineering sits above the main information flow */}
        <StackCard
          title="3D / ENGINEERING"
          subtitle="Design · simulate · validate"
          items={stacks.engineering}
          className={styles.engineering}
        />

        <div className={styles.flow}>
          <StackCard
            title="HARDWARE / IoT"
            subtitle="Sense the real world"
            items={stacks.hardware}
          />

          <div className={styles.connector}>
            <span>DATA</span>
            <i />
          </div>

          <StackCard
            title="AI / DATA"
            subtitle="Turn data into intelligence"
            items={stacks.ai}
          />

          <div className={styles.connector}>
            <span>INTELLIGENCE</span>
            <i />
          </div>

          <StackCard
            title="SOFTWARE"
            subtitle="Build the system"
            items={stacks.software}
          />

          <div className={styles.connector}>
            <span>EXPERIENCE</span>
            <i />
          </div>

          <StackCard
            title="APPLICATIONS"
            subtitle="Deliver useful experiences"
            items={stacks.applications}
          />
        </div>

      </div>
    </section>
  );
}
