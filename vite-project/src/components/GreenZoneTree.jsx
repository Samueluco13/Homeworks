import Tree from "react-d3-tree";
import '../styles/GreenZoneTree.css'

function GreenZoneTree({ zones }) {
  if (zones.length === 0) {
    return null;
  }

  const convertZonesToTreeData = (zones) => {
    return zones.map(zone => ({
      name: zone.name,
      attributes: {
        niveles: zone.getHeight(),
      },
      children: zone.subzones.length > 0 ? convertZonesToTreeData(zone.subzones) : [],
    }));
  };

  const treeData = convertZonesToTreeData(zones)[0];

  const treeConfig = {
    orientation: "vertical",
    nodeSize: { x: 200, y: 100 },
    separation: { siblings: 2, nonSiblings: 2.5 },
    pathFunc: "step",
  };

  return (
    <div className="green-zone-tree">
      <h3>Zonas Verdes</h3>
      <div className="tree-container">
        <Tree
          data={treeData}
          orientation="vertical"
          renderCustomNodeElement={({ nodeDatum }) => (
            <g className="node-container">
              <circle className="node-circle" />
              <text className="node-text" x="25" y="-10">
                {nodeDatum.name}
              </text>
              {nodeDatum.attributes?.niveles !== undefined && (
                <text className="node-text small" x="25" y="10">
                  {`${nodeDatum.attributes.niveles} nivel${nodeDatum.attributes.niveles === 1 ? '' : 'es'}`}
                </text>
              )}
            </g>
          )}
          {...treeConfig}
          translate={{ x: 300, y: 50 }}
        />
      </div>
    </div>
  );
}

export default GreenZoneTree; 