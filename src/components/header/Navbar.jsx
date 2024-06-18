import { Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const NavTitles = ["Home", "About", "Products", "Contact us"]

export default function Navbar() {

  const frostedStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(20px) saturate(160%) contrast(45%) brightness(140%)',
    // WebkitBackdropFilter: 'blur(20px) saturate(160%) contrast(45%) brightness(140%)',
    zIndex: 1,
    overflow: 'hidden',
    position: 'fixed',
    top: 0,
    width: '100%'
  };
  return (
    <div  className="flex   w-full flex-col" style={frostedStyles} >
      <header className="  sticky top-0 flex h-16 items-center gap-4 border-b  px-4 md:px-6" >
        <nav className="hidden  flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          {/* logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            Steps
            <span className="sr-only">Acme Inc</span>
          </a>

   
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <a
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
               Steps
                <span className="sr-only">Acme Inc</span>
              </a>
              {NavTitles.map((title,key)=>(
              <a
              key={key}
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {title}
            </a>
          ))}

            </nav>
          </SheetContent>
        </Sheet>
        <div className=" flex w-full sm:w-auto items-center space-x-4 gap-4 md:ml-auto md:gap-2 lg:gap-4">
                      {/* nav links */}
          {NavTitles.map((title,key)=>(
              <a
              key={key}
              href="#"
              className="hidden sm:flex text-muted-foreground transition-colors hover:text-foreground"
            >
              {title}
            </a>
          ))}
           <a href="/login">
          <Button>SignIn/Signup</Button>
          </a>
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
    
        </div>
      </header>
    
    </div>
  )
}

