"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroBillboardGallery from "@/components/sections/hero/HeroBillboardGallery";
import FeatureCardTwentyOne from "@/components/sections/feature/FeatureCardTwentyOne";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import MetricCardThree from "@/components/sections/metrics/MetricCardThree";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import PricingCardTwo from "@/components/sections/pricing/PricingCardTwo";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";
import { Award, CheckCircle, Crown, DollarSign, Globe, Heart, MessageSquare, Sparkles, Star, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="mediumSmall"
      sizing="mediumLargeSizeMediumTitles"
      background="circleGradient"
      cardStyle="gradient-radial"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="ChatGPT"
          navItems={[
            { name: "Features", id: "features" },
            { name: "Capabilities", id: "capabilities" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Unlock Advanced AI Conversations"
          description="Experience the power of ChatGPT—your intelligent assistant for writing, analysis, math, coding, and creative thinking. Transform how you work and think with cutting-edge AI technology."
          tag="AI-Powered"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Start Free Trial", href: "#pricing" },
            { text: "Learn More", href: "#features" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "plain" }}
          mediaItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BIBJJiLnidOquXtU46kgUnPLfk/a-vibrant-modern-ai-conversation-interfa-1774167166747-1883f5ce.png", imageAlt: "ChatGPT AI Interface" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BIBJJiLnidOquXtU46kgUnPLfk/abstract-representation-of-natural-langu-1774167166290-7eaba0b9.png", imageAlt: "Natural Language Processing" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BIBJJiLnidOquXtU46kgUnPLfk/visualization-of-vast-knowledge-base-and-1774167166591-2d908128.png", imageAlt: "AI Knowledge Base" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BIBJJiLnidOquXtU46kgUnPLfk/team-collaboration-with-ai-assistance-sh-1774167166971-79488a00.png", imageAlt: "Team Collaboration" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BIBJJiLnidOquXtU46kgUnPLfk/modern-tech-company-environment-showcasi-1774167166518-625e4c90.png", imageAlt: "Innovation Hub" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BIBJJiLnidOquXtU46kgUnPLfk/modern-abstract-background-with-fluid-de-1774167165955-0b9996d5.png", imageAlt: "Future Technology" }
          ]}
          mediaAnimation="slide-up"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyOne
          title="Powerful Capabilities"
          description="ChatGPT enables you to tackle complex tasks with ease. From writing and analysis to coding and creative problem-solving."
          tag="Advanced Features"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[{ text: "Explore Features", href: "#" }]}
          buttonAnimation="slide-up"
          accordionItems={[
            { id: "writing", title: "Professional Writing & Content", content: "Generate high-quality content for emails, articles, blogs, and more. ChatGPT helps you craft compelling narratives and refine your writing with intelligent suggestions." },
            { id: "analysis", title: "In-Depth Analysis & Research", content: "Analyze complex data, summarize information, and gain insights from multiple perspectives. ChatGPT processes and presents information in clear, actionable formats." },
            { id: "coding", title: "Code Generation & Debugging", content: "Write, debug, and optimize code across multiple programming languages. Get explanations and suggestions to improve your development workflow." },
            { id: "creative", title: "Creative Thinking & Brainstorming", content: "Generate ideas, explore concepts, and push creative boundaries. ChatGPT is your brainstorming partner for projects and innovation." }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BIBJJiLnidOquXtU46kgUnPLfk/abstract-representation-of-natural-langu-1774167166290-7eaba0b9.png"
          imageAlt="AI Capabilities"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
          mediaPosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Why Choose ChatGPT?"
          description={[
            "ChatGPT is built on advanced language models trained on diverse internet content, providing accurate, nuanced responses to virtually any question or task.",            "Our commitment to safety, accuracy, and user experience makes ChatGPT the preferred choice for millions of professionals, students, and creators worldwide.",            "Whether you're looking to enhance productivity, learn new skills, or explore creative possibilities, ChatGPT delivers reliable, intelligent assistance whenever you need it."
          ]}
          buttons={[{ text: "Get Started Today", href: "#pricing" }]}
          buttonAnimation="slide-up"
          showBorder={true}
          useInvertedBackground={true}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Trusted by Millions"
          description="ChatGPT's impact across industries, delivering exceptional results and transforming how people work."
          tag="Global Impact"
          tagIcon={Award}
          tagAnimation="slide-up"
          metrics={[
            { id: "users", icon: Users, title: "Active Users", value: "100M+" },
            { id: "conversations", icon: MessageSquare, title: "Conversations Daily", value: "10M+" },
            { id: "languages", icon: Globe, title: "Supported Languages", value: "95+" },
            { id: "uptime", icon: CheckCircle, title: "System Uptime", value: "99.9%" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="Loved by Users"
          description="Join thousands of professionals and creators who have transformed their work with ChatGPT."
          testimonials={[
            { id: "1", name: "Sarah Johnson", handle: "@sarahjtech", testimonial: "ChatGPT transformed my content creation process. What used to take hours now takes minutes, and the quality is exceptional. Highly recommend!", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BIBJJiLnidOquXtU46kgUnPLfk/professional-headshot-of-diverse-profess-1774167166268-d0e89b94.png", imageAlt: "Sarah Johnson", icon: Star },
            { id: "2", name: "Michael Chen", handle: "@mchen_dev", testimonial: "As a developer, ChatGPT is invaluable. It helps me debug code, learn new frameworks, and solve complex problems faster than ever before.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BIBJJiLnidOquXtU46kgUnPLfk/professional-diverse-business-person-hea-1774167166358-4e5db1eb.png", imageAlt: "Michael Chen", icon: Star },
            { id: "3", name: "Emily Rodriguez", handle: "@emilyrodriguez", testimonial: "I use ChatGPT daily for research, writing, and brainstorming. It's like having a brilliant assistant available 24/7. Game-changing!", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BIBJJiLnidOquXtU46kgUnPLfk/professional-technology-industry-worker--1774167165590-5fac2e5f.png", imageAlt: "Emily Rodriguez", icon: Star },
            { id: "4", name: "David Kim", handle: "@davidkim_ai", testimonial: "The quality of responses is outstanding. ChatGPT understands context, nuance, and complexity in ways that feel genuinely intelligent and helpful.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BIBJJiLnidOquXtU46kgUnPLfk/professional-diversity-in-business-heads-1774167165866-e72477f4.png", imageAlt: "David Kim", icon: Star },
            { id: "5", name: "Jessica Lee", handle: "@jessicalee_creative", testimonial: "Perfect for creative projects and exploring ideas. ChatGPT helps me overcome writer's block and discover new angles for my work.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BIBJJiLnidOquXtU46kgUnPLfk/professional-business-industry-headshot--1774167165918-64c4ceb7.png", imageAlt: "Jessica Lee", icon: Star },
            { id: "6", name: "Alex Thompson", handle: "@alexthompson", testimonial: "Impressive versatility and reliability. Whether it's coding, writing, or analysis, ChatGPT consistently delivers outstanding results.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BIBJJiLnidOquXtU46kgUnPLfk/professional-business-headshot-of-confid-1774167166436-d9631aec.png", imageAlt: "Alex Thompson", icon: Star }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          tag="Community Love"
          tagIcon={Heart}
          tagAnimation="slide-up"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Simple, Transparent Pricing"
          description="Choose the plan that works for you. Get started free or upgrade for advanced features."
          tag="Affordable Plans"
          tagIcon={DollarSign}
          tagAnimation="slide-up"
          plans={[
            { id: "free", badge: "Popular", badgeIcon: Sparkles, price: "Free", subtitle: "Perfect for getting started", features: ["Access to GPT-3.5", "Basic conversations", "Limited daily requests", "Email support", "Standard response quality"], buttons: [{ text: "Start Free", href: "#" }] },
            { id: "pro", badge: "Most Popular", badgeIcon: Crown, price: "$20", subtitle: "Per month, cancel anytime", features: ["Access to GPT-4", "Unlimited conversations", "Priority support", "Advanced analysis tools", "Custom instructions", "File uploads & analysis", "Web browsing capability"], buttons: [{ text: "Upgrade to Pro", href: "#" }] },
            { id: "enterprise", badge: "For Teams", badgeIcon: Users, price: "Custom", subtitle: "Contact for details", features: ["Dedicated account management", "Advanced security & compliance", "Custom model training", "API access", "Usage analytics & insights", "Priority implementation", "24/7 dedicated support"], buttons: [{ text: "Contact Sales", href: "#" }] }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Ready to Start?"
          tagIcon={Zap}
          tagAnimation="slide-up"
          title="Join Millions of Users"
          description="Experience the future of AI-powered conversations. Sign up for ChatGPT today and unlock unlimited potential."
          buttons={[
            { text: "Get Started Free", href: "#" },
            { text: "Upgrade to Pro", href: "#" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="ChatGPT"
          copyrightText="© 2025 OpenAI. All rights reserved."
          columns={[
            { title: "Product", items: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }, { label: "API", href: "#" }, { label: "Enterprise", href: "#" }] },
            { title: "Company", items: [{ label: "About Us", href: "#" }, { label: "Blog", href: "#" }, { label: "Careers", href: "#" }, { label: "Contact", href: "#" }] },
            { title: "Resources", items: [{ label: "Documentation", href: "#" }, { label: "Help Center", href: "#" }, { label: "Community", href: "#" }, { label: "Status", href: "#" }] },
            { title: "Legal", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }, { label: "Cookie Policy", href: "#" }, { label: "Security", href: "#" }] }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}