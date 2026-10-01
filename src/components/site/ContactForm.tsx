import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { productos } from "@/data/productos";

const schema = z.object({
  nombre: z.string().trim().min(2, "Ingresa tu nombre completo").max(100),
  empresa: z.string().trim().max(100).optional(),
  correo: z.string().trim().email("Ingresa un correo válido").max(255),
  telefono: z.string().trim().min(6, "Ingresa un teléfono válido").max(20).regex(/^[0-9+\s()-]+$/, "Solo números"),
  ciudad: z.string().trim().min(2, "Ingresa tu ciudad").max(80),
  tipoCliente: z.string().min(1, "Selecciona una opción"),
  producto: z.string().min(1, "Selecciona un producto"),
  cantidad: z.string().trim().max(60).optional(),
  asunto: z.string().trim().min(3, "Ingresa un asunto").max(120),
  mensaje: z.string().trim().min(10, "Escribe un mensaje (mín. 10 caracteres)").max(1000),
});

export type ContactData = z.infer<typeof schema>;

const tipos = ["Particular", "Restaurante / Hotel / Cafetería", "Tienda", "Distribuidor", "Empresa", "Otro"];

const selectClass =
  "flex h-11 w-full rounded-md border border-input bg-card px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

/**
 * Formulario de contacto. Para conectarlo con email/CRM/backend,
 * reemplaza el contenido de `enviarConsulta`.
 */
async function enviarConsulta(data: ContactData) {
  await new Promise((r) => setTimeout(r, 600));
  console.info("Consulta recibida", data);
}

export function ContactForm({ productoInicial = "" }: { productoInicial?: string }) {
  const [enviado, setEnviado] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactData>({
    resolver: zodResolver(schema),
    defaultValues: { producto: productoInicial, tipoCliente: "" },
  });

  const onSubmit = async (data: ContactData) => {
    await enviarConsulta(data);
    reset();
    setEnviado(true);
  };

  if (enviado) {
    return (
      <div role="status" className="flex flex-col items-center rounded-2xl border border-border bg-card p-10 text-center shadow-soft">
        <CheckCircle2 className="size-14 text-primary-soft" aria-hidden="true" />
        <p className="mt-5 max-w-md font-display text-xl text-primary">
          Gracias por contactarnos. Hemos recibido tu consulta y nos comunicaremos contigo pronto.
        </p>
        <Button variant="outlineVerde" size="lg" className="mt-6" onClick={() => setEnviado(false)}>Enviar otra consulta</Button>
      </div>
    );
  }

  const Field = ({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) => (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-sm font-semibold text-foreground">{label}</Label>
      {children}
      {error ? <p className="text-xs text-destructive" role="alert">{error}</p> : null}
    </div>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5 rounded-2xl border border-border bg-card p-6 shadow-soft md:grid-cols-2 md:p-9">
      <Field id="nombre" label="Nombre completo *" error={errors.nombre?.message}><Input id="nombre" className="h-11" autoComplete="name" {...register("nombre")} /></Field>
      <Field id="empresa" label="Empresa" error={errors.empresa?.message}><Input id="empresa" className="h-11" autoComplete="organization" {...register("empresa")} /></Field>
      <Field id="correo" label="Correo electrónico *" error={errors.correo?.message}><Input id="correo" type="email" className="h-11" autoComplete="email" {...register("correo")} /></Field>
      <Field id="telefono" label="Teléfono *" error={errors.telefono?.message}><Input id="telefono" type="tel" className="h-11" autoComplete="tel" {...register("telefono")} /></Field>
      <Field id="ciudad" label="Ciudad *" error={errors.ciudad?.message}><Input id="ciudad" className="h-11" {...register("ciudad")} /></Field>
      <Field id="tipoCliente" label="Tipo de cliente *" error={errors.tipoCliente?.message}>
        <select id="tipoCliente" className={selectClass} {...register("tipoCliente")}>
          <option value="">Selecciona…</option>
          {tipos.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </Field>
      <Field id="producto" label="Producto de interés *" error={errors.producto?.message}>
        <select id="producto" className={selectClass} {...register("producto")}>
          <option value="">Selecciona…</option>
          {productos.map((p) => <option key={p.id} value={p.id}>{p.titulo}</option>)}
          <option value="otro">Otro / No estoy seguro</option>
        </select>
      </Field>
      <Field id="cantidad" label="Cantidad aproximada" error={errors.cantidad?.message}><Input id="cantidad" placeholder="Ej.: 50 kg semanales" className="h-11" {...register("cantidad")} /></Field>
      <div className="md:col-span-2"><Field id="asunto" label="Asunto *" error={errors.asunto?.message}><Input id="asunto" className="h-11" {...register("asunto")} /></Field></div>
      <div className="md:col-span-2"><Field id="mensaje" label="Mensaje *" error={errors.mensaje?.message}><Textarea id="mensaje" rows={5} {...register("mensaje")} /></Field></div>
      <div className="md:col-span-2">
        <Button type="submit" variant="cta" size="xl" disabled={isSubmitting} className="w-full md:w-auto">
          {isSubmitting ? "Enviando…" : "Enviar consulta"}
        </Button>
      </div>
    </form>
  );
}
