import React,{ useState,setResponsivePopoverIsOpen } from "react";
import {ResponsivePopover,Button,Label,Grid, Bar,Title,Icon} from '@ui5/webcomponents-react';
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
            </ResponsivePopover>
      </>
    );
  };
export default MyComponentWithPopover;
  