import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';

function MobileNav() {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className='text-orange-500'/>
        </SheetTrigger>
        <SheetContent className='space-y-3'>
            <SheetTitle>
            <span>Welcome to FoodieHUB</span>
            </SheetTitle>
        <Separator/>
        <SheetDescription className='flex'>
          <Button className='flex-1 font-bold bg-orange-500'>Log In</Button>
        </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav