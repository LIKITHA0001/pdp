import React,{ useState,setResponsivePopoverIsOpen } from "react";
import {ResponsivePopover,Button,Label,Grid, Bar,Title,Icon, List, StandardListItem} from '@ui5/webcomponents-react';
const MyComponentWithPopover = () => {
    const [popoverIsOpen, setPopoverIsOpen] = useState(false);
    return (
      <>
        <Button
          id={'openPopoverBtn'}
          onClick={() => {
            setPopoverIsOpen(true);
          }}
        >
          Current Selection
        </Button>
        <ResponsivePopover
        header={<Bar endContent={<Icon name="close"/>}><Title>Current Selection</Title></Bar>}
          opener={'openPopoverBtn'}
          open={popoverIsOpen}
          onAfterClose={() => {
            setResponsivePopoverIsOpen(false);
          }}
        >
          <List
          style={{
            width:'200px'
          }}
          >
            <StandardListItem additionalText="3">
              Total
            </StandardListItem>
            <StandardListItem additionalText="2">
              Average
            </StandardListItem>
            <StandardListItem additionalText="1">
              Individual
            </StandardListItem>
          </List>
            </ResponsivePopover>
      </>
    );
  };
export default MyComponentWithPopover;
  