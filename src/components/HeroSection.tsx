import { motion } from "framer-motion";
import Image from "next/image"; // 이미지 최적화를 위한 Next.js Image 컴포넌트 임포트

interface HeroSectionProps {
  title: React.ReactNode; // 히어로 섹션의 메인 제목
  subtitle?: React.ReactNode; // 히어로 섹션의 서브 제목
  backgroundImage: string; // 배경 이미지 경로
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className="hero-section relative h-[300px] flex items-center text-white overflow-hidden">
      <Image
        src={backgroundImage}
        alt={`${title} 배경 이미지`}
        fill // 부모 요소에 맞게 이미지를 채움
        priority // 이 이미지를 우선적으로 로드 (LCP 최적화)
        className="object-cover object-center" // 이미지가 섹션에 꽉 차도록 설정
      />

      {/* 어둡게 오버레이 */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{title}</h1>
        <p className="text-lg md:text-xl font-medium">{subtitle}</p>
      </motion.div>
    </section>
  );
}
