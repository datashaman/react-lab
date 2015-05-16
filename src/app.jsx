import React from 'react';
import immstruct from 'immstruct';
import component from 'omniscient';

component.debug();

var Thing = component('Thing', ({ thing }) => {
    var onChange = (e) => thing.set('title', e.target.value)
    return <div>
      <div className="title">
        {thing.get('title')}
      </div>
      <input defaultValue={thing.get('title')} onChange={onChange} />
    </div>;
});

var Container = component('Container', ({ things }) =>
    <div>
        {things.toArray().map((thing, i) => <Thing.jsx key={i} thing={thing} />)}
    </div>
);

var data = immstruct({
  things: [
    {title: ''},
    {title: ''}
  ]
});

data.on('swap', render);
render();

function render() {
  React.render(
      <Container.jsx things={data.cursor('things')} />,
      document.getElementById('someDiv')
  );
};

