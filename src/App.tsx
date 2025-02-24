import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from './components/ui/button';
import { Dialog } from './components/ui/dialog';
import Nav from './components/nav';

function App() {
    return (
        <>
            <Nav />
            <Button>Test</Button>
            <Accordion
                className="w-full lg:w-[unset]"
                type="single"
                collapsible
            >
                <AccordionItem
                    className="lg:w-[500px] max-w-full"
                    value="item-1"
                >
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Dialog>hello</Dialog>
        </>
    );
}

export default App;
