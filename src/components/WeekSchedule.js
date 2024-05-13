import React from 'react';
import { Tabs } from '@radix-ui/themes';

const WeekSchedule = () => {

  return (
    <Tabs.Root defaultValue='Monday'>
        <Tabs.List>
            <Tabs.Trigger value='Monday'>Monday</Tabs.Trigger>
            <Tabs.Trigger value='Tuesday'>Tuesday</Tabs.Trigger>
            <Tabs.Trigger value='Wednesday'>Wednesday</Tabs.Trigger>
            <Tabs.Trigger value='Thursday'>Thursday</Tabs.Trigger>
            <Tabs.Trigger value='Friday'>Friday</Tabs.Trigger>
            <Tabs.Trigger value='Saturday'>Saturday</Tabs.Trigger>
            <Tabs.Trigger value='Sunday'>Sunday</Tabs.Trigger>
        </Tabs.List>

        <div>
            <Tabs.Content value='Monday'></Tabs.Content>
            <Tabs.Content value='Tuesday'></Tabs.Content>
            <Tabs.Content value='Wednesday'></Tabs.Content>
            <Tabs.Content value='Thursday'></Tabs.Content>
            <Tabs.Content value='Friday'></Tabs.Content>
            <Tabs.Content value='Saturday'></Tabs.Content>
            <Tabs.Content value='Sunday'></Tabs.Content>
        </div>
    </Tabs.Root>
  );
};

export default WeekSchedule;
