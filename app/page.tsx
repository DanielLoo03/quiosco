import OrderSidebar from "@/components/order/OrderSidebar";
import OrderSummary from "@/components/order/OrderSummary";

export default function Home() {
  return (
    <div className="flex"> 
      <OrderSidebar />
      <OrderSummary />
    </div>
  );
}
