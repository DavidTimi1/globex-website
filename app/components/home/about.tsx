"use client";

import { motion } from "framer-motion";

type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  { value: "6+", label: "Countries" },
  { value: "15+", label: "Years" },
  { value: "100+", label: "Partners" },
];

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 space-y-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-left text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            <span className="block text-neutral-400">Welcome to</span>
            <span className="text-neutral-900">
              Globex Worldwide<span className="align-super text-xl">®</span>
            </span>
          </h2>
        </motion.div>

        {/* Video + Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Video */}
          <div className="overflow-hidden rounded-xl">
            <video
              src="https://framerusercontent.com/assets/bnXW5kuLgDnDOscrWOV4xhEjZBo.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* About Us */}
            <InfoBlock
              title="About Us"
              icon={WaveIcon}
              text={
                <>
                  Globex Worldwide DMCC has been a trusted link between producers
                  and industries for over a decade. With operations in{" "}
                  <strong>UAE, Oman, India, and Bangladesh</strong>, we build
                  long-term relationships founded on transparency and
                  performance.
                </>
              }
            />

            {/* Mission */}
            <InfoBlock
              title="Our Mission"
              icon={TargetIcon}
              text={
                <>
                  Our mission is to deliver reliable commodity solutions while
                  fostering sustainable partnerships across global markets
                  through integrity, consistency, and performance.
                </>
              }
            />
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* Subcomponents */
/* ---------------------------------- */

function InfoBlock({
  title,
  text,
  icon: Icon,
}: {
  title: string;
  text: React.ReactNode;
  icon: React.FC<{ className?: string }>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-neutral-400" />
        <h4 className="text-lg font-semibold text-neutral-900">{title}</h4>
      </div>
      <p className="text-neutral-600 leading-relaxed">{text}</p>
    </motion.div>
  );
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative rounded-xl border bg-neutral-50 p-8 text-center overflow-hidden"
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(https://framerusercontent.com/images/N9GeBa0CRBIhhvb9pYLnIeWF4gQ.svg)",
          backgroundSize: "20px",
        }}
      />

      <div className="relative z-10 space-y-2">
        <h3 className="text-5xl font-semibold tracking-tight text-neutral-900">
          {stat.value}
        </h3>
        <p className="text-sm text-neutral-600">{stat.label}</p>
      </div>
    </motion.div>
  );
}

/* ---------------------------------- */
/* Icons */
/* ---------------------------------- */

function WaveIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="currentColor">
      <path d="M216,70.39v112c-72,59.69-104-56.47-176,3.22v-112C112,13.92,144,130.08,216,70.39Z" />
    </svg>
  );
}

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="currentColor">
      <path d="M128 80a48 48 0 1 0 48 48 48 48 0 0 0-48-48Z" />
    </svg>
  );
}
