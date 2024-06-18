import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCarousel from "../products-carousel/ProductCarousel";
import TabItem from "../tabContent/TabItem";

export default function TabsDemo() {
  return (
    <Tabs
      defaultValue="Indivitual"
      className="w-full  flex flex-col justify-center items-center "
    >
      <TabsList className="">
        <TabsTrigger value="Indivitual">Indivitual</TabsTrigger>
        <TabsTrigger value="Corporate">Corporate</TabsTrigger>
        <TabsTrigger value="Partner">Partner</TabsTrigger>
        <TabsTrigger value="Collage">Collage</TabsTrigger>
      </TabsList>
      <TabsContent className=" w-full h-auto " value="Indivitual">
        <div className="p-9">
          <ProductCarousel />
        </div>
      </TabsContent>
      <TabsContent className=" w-full h-[600px] " value="Corporate">
        <TabItem />
      </TabsContent>
      <TabsContent className=" w-full h-[600px] " value="Partner">
        <Card className="text-center h-full">
          <CardHeader>
            <CardTitle>Partner</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1"></div>
            <div className="space-y-1"></div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>

      <TabsContent className=" w-full h-[600px] " value="Collage">
        <Card className="text-center h-full">
          <CardHeader>
            <CardTitle>Collage</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1"></div>
            <div className="space-y-1"></div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
