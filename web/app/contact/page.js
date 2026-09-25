import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact — Start Your Commission',
  description: 'Contact Hafsa Noreen Photography: inquiries answered within 60 seconds by Haffu, personally by Hafsa during studio hours. Oakville, Burlington, Milton, Halton & Toronto.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <section aria-labelledby="contact-heading" className="bg-charcoal-deep pb-14 pt-36 text-ivory md:pt-44">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-10">
          <p className="section-label !text-brass-light">✦ Say Hello</p>
          <h1 id="contact-heading" className="display-title mt-4 text-[clamp(2.4rem,6vw,4.2rem)]">Let&rsquo;s Create Something Beautiful</h1>
          <p className="mx-auto mt-5 max-w-xl font-body text-[0.95rem] font-light leading-relaxed text-ivory/70">
            Fill this out and Haffu routes it instantly — Hafsa replies personally within 60 seconds during studio hours.
          </p>
        </div>
      </section>
      <section aria-label="Inquiry form" className="bg-ivory py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <ContactForm />
          <div className="mt-10 grid gap-4 text-center sm:grid-cols-3">
            <div className="rounded-sm border border-charcoal/10 bg-white p-5">
              <p className="font-body text-[0.6rem] font-bold uppercase tracking-[0.26em] text-charcoal/50">Studio</p>
              <p className="mt-1 font-body text-sm">3404 Millicent Ave, Oakville</p>
            </div>
            <div className="rounded-sm border border-charcoal/10 bg-white p-5">
              <p className="font-body text-[0.6rem] font-bold uppercase tracking-[0.26em] text-charcoal/50">Call</p>
              <a href="tel:+16479093135" className="mt-1 block font-body text-sm text-brass hover:text-charcoal">(647) 909-3135</a>
            </div>
            <div className="rounded-sm border border-charcoal/10 bg-white p-5">
              <p className="font-body text-[0.6rem] font-bold uppercase tracking-[0.26em] text-charcoal/50">Email</p>
              <a href="mailto:hello@hafsanoreen.com" className="mt-1 block font-body text-sm text-brass hover:text-charcoal">hello@hafsanoreen.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
