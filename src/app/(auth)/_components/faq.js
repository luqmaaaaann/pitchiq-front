import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section
      id="faq"
      className="scroll-mt-20 w-full mx-auto font-main max-w-7xl px-6 sm:px-6 py-24 mt-8"
    >
      <Accordion
        type="single"
        collapsible
        className="w-full mb-24"
        defaultValue="item-1"
      >
        <h2 className="text-5xl font-bold md:text-5xl mt-2 flex justify-center items-center mb-24">
          Frequently Asked Questions
        </h2>
        <AccordionItem value="item-1">
          <AccordionTrigger className="no-underline text-left text-xl font-semibold text-black hover:text-blue-600 focus:outline-none">
            What is a PitchIQ?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col text-gray-500 text-balance text-base font-medium">
            <p>
              PitchIQ is an AI-powered web application that helps founders
              evaluate their pitch decks quickly, consistently, and accurately.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="no-underline text-left text-xl font-semibold text-black hover:text-blue-600 focus:outline-none">
            How to use PitchIQ?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col text-gray-500 text-base font-medium">
            <p>
              Simply sign up if you don’t have an account, upload your pitch
              deck in PDF format (up to 10 slides), and our AI system will
              analyze it and provide feedback along with a feasibility score to
              help you refine your idea and presentation.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="no-underline text-left text-xl font-semibold text-black hover:text-blue-600 focus:outline-none">
            Can I make a payment from Indonesia?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col text-gray-500 text-balance text-base font-medium">
            <p>Yes, you can make payments from Indonesia.</p>
            <p>
              You can pay using any bank that supports Visa cards. Additionally,
              we accept payments via QRIS, GoPay, OVO, and ShopeePay.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="no-underline text-left text-xl font-semibold text-black hover:text-blue-600 focus:outline-none">
            Is there a customer service contact I can reach out to?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col text-gray-500 text-balance text-base font-medium">
            <p>
              Yes, if you experience any technical issues or need assistance,
              feel free to contact our support team. You can reach us via email
              at
              <span className="text-blue-600"> admin@PitchIQ.id</span>, and well
              be happy to help you as soon as possible.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="no-underline text-left text-xl font-semibold text-black hover:text-blue-600 focus:outline-none">
            Privacy Policy & Terms Summary
          </AccordionTrigger>
          <AccordionContent className="flex flex-col text-gray-500 text-balance text-base font-medium">
            <p>
              We value your privacy. All uploaded data is securely stored and
              never shared with third parties without your consent.
            </p>
            <p>
              By using PitchIQ, you agree to our terms of service, which cover
              data usage, intellectual property rights, and user
              responsibilities.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
