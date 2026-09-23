import { Mail, MessageCircle, Phone } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { contact, type Lang } from "@/content";
import { emailHref, phoneHref, t, whatsappHref } from "@/lib/i18n";

export function Contact({ lang }: { lang: Lang }) {
  const text = t(lang);
  const c = text.contactSection;
  const id = text.anchors.contact;

  const items = [
    { icon: Phone, label: c.phoneLabel, value: contact.phoneDisplay, href: phoneHref(), external: false },
    { icon: MessageCircle, label: c.whatsappLabel, value: c.whatsappText, href: whatsappHref(lang), external: true },
    { icon: Mail, label: c.emailLabel, value: contact.email, href: emailHref(), external: false },
  ];

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="bg-petrol-light py-16 sm:py-24">
      <div className="container">
        <SectionHeading id={`${id}-title`} title={c.title} intro={c.text} />

        <ul className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex h-full items-center gap-4 rounded-lg border-2 border-border bg-white p-5 transition-colors hover:border-petrol"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-md bg-petrol text-white">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-muted-foreground">{item.label}</span>
                  <span className="block break-words font-semibold text-anthracite">{item.value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
