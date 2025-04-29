import OrderSidebar from "@/components/order/OrderSidebar";
import OrderSummary from "@/components/order/OrderSummary";
import { redirect } from "next/navigation";

export default function Home() {
  redirect('/order/cafe')
}