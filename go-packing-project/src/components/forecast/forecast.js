import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"

const WeatherForecast = ({ data }) => {
    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                   
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel></AccordionItemPanel>
                    </AccordionItem>
              
            </Accordion>
        </>
    );
};

export default WeatherForecast