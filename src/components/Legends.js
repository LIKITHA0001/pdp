import React from "react";
import { Panel, TableColumn, TableRow } from '@ui5/webcomponents-react';
import { List } from '@ui5/webcomponents-react';
import { StandardListItem } from '@ui5/webcomponents-react';
import { Table, TableCell } from '@ui5/webcomponents-react';
import { Label } from "@ui5/webcomponents-react";

function CollapsiblePanel(){
    return(<Table
    columns={<><TableColumn style={{width:'20rem'}}><Label>Legends</Label></TableColumn></>}
    >
        <TableRow>
            <TableCell>
            <Panel headerText="Total" onToggle={function ka(){}}>
    <List>
        <StandardListItem > Unit sales(Total)</StandardListItem>
        <StandardListItem >Corrected Unit Sales </StandardListItem>
        <StandardListItem >System Forecast(Total) </StandardListItem>
        <StandardListItem >Adjusted Forecast (Total)</StandardListItem>
    </List>
</Panel>

            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell>
            <Panel headerText="Regular" onToggle={function ka(){}}>
    <List>
        <StandardListItem > Unit sales(Total)</StandardListItem>
        <StandardListItem >Corrected Unit Sales </StandardListItem>
        <StandardListItem >System Forecast(Regular) </StandardListItem>

    </List>
</Panel>

            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell>
            <Panel headerText="Promotions" onToggle={function ka(){}}>
    <List>
        <StandardListItem > Unit sales(Total)</StandardListItem>
        <StandardListItem >Corrected Unit Sales </StandardListItem>
        <StandardListItem >System Forecast </StandardListItem>

    </List>
</Panel>

            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell>
            <Panel headerText="Systen DIFs" onToggle={function ka(){}}>
    <List>
        <StandardListItem > Inventory</StandardListItem>
        <StandardListItem >Actual Sales price </StandardListItem>
        <StandardListItem >Planned price </StandardListItem>
        <StandardListItem>Calender Events</StandardListItem>

    </List>
</Panel>

            </TableCell>
        </TableRow>


    </Table>
        

    );
    
}
export default CollapsiblePanel;