import { createClient } from "@/lib/supabase/client";
import Image from "next/image";

export default  async  function Home() {
  const supabase =  createClient();

  const { data: products, error } = await supabase.from("Proje").select();
console.log(products)
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          </div>
  );
}
