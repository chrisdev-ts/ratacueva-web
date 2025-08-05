import { Body, Subheading } from "@/components/atoms/Typography";

interface PurchaseSummaryProps {
  subtotal: number;
  total: number;
}

export default function PurchaseSummary({ subtotal, total }: PurchaseSummaryProps) {
  return (
    <div className="flex-1 w-full lg:w-auto">
      <div className="p-6 bg-gray rounded-lg space-y-6">
        <Subheading className="text-white">Resumen de la compra</Subheading>
        <div className="h-px bg-white/20"></div>
        <div className="flex justify-between items-center">
          <Body className="text-white text-xl">Producto</Body>
          <Body className="text-white text-xl">₡{subtotal.toLocaleString()}</Body>
        </div>
        <div className="flex justify-between items-center">
          <Body className="text-white text-xl">Envío</Body>
          <Body className="text-emerald-400 text-xl">Gratis</Body>
        </div>
        <div className="h-px bg-white/20"></div>
        <div className="flex justify-between items-center">
          <Body className="text-white text-xl">Total</Body>
          <Subheading className="text-white text-xl">₡{total.toLocaleString()}</Subheading>
        </div>
      </div>
    </div>
  );
}