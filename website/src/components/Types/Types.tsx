import React from 'react';
import { toast } from 'sonner';
import { CodeBlock } from '../CodeBlock';

export const Types = () => {
  const [activeType, setActiveType] = React.useState(allTypes[0]);

  return (
    <div>
      <h2>Types</h2>
      <p>
        You can customize the type of toast you want, or pass an options object as the second argument.
      </p>
      <div className="buttons">
        {allTypes.map((type) => (
          <button
            className="button"
            data-active={activeType.name === type.name}
            onClick={() => {
              type.action();
              setActiveType(type);
            }}
            key={type.name}
          >
            {type.name}
          </button>
        ))}
      </div>
      <CodeBlock>{`${activeType.snippet}`}</CodeBlock>
    </div>
  );
};

const allTypes = [
  {
    name: 'Default',
    snippet: `toast('Event has been created')`,
    action: () => toast('Event has been created'),
  },
  {
    name: 'Description',
    snippet: `toast.message('Event has been created', {
  description: 'Monday, January 3rd at 6:00pm',
})`,
    action: () =>
      toast('Event has been created', {
        description: 'Monday, January 3rd at 6:00pm',
      }),
  },
  {
    name: 'Success',
    snippet: `toast.success('Event has been created')`,
    action: () => toast.success('Event has been created'),
  },
  {
    name: 'Error',
    snippet: `toast.error('Event has not been created')`,
    action: () => toast.error('Event has not been created'),
  },
  {
    name: 'Action',
    snippet: `toast('Event has been created', {
  action: {
    label: 'Undo',
    onClick: () => console.log('Undo')
  },
})`,
    action: () =>
      toast.message('Event has been created', {
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo'),
        },
      }),
  },
  {
    name: 'Promise',
    snippet: `const promise = () => new Promise((resolve) => setTimeout(resolve, 2000));

toast.promise(promise, {
  loading: 'Loading',
  success: 'Success',
  error: 'Error',
});`,
    action: () =>
      toast.promise(() => new Promise((resolve) => setTimeout(resolve, 2000)), {
        loading: 'Loading',
        success: 'Success',
        error: 'Error',
      }),
  },
  {
    name: 'Custom',
    snippet: `toast.custom(() => <div>This is a custom component</div>)`,
    action: () => toast.custom(() => <div>This is a custom component</div>),
  },
];
