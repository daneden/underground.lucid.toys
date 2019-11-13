import styled from "@emotion/styled"
import TFLLine from "./TFLLine"

const List = styled.ul`
  flex: 1 1 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: stretch;
  z-index: 2;
`

const TFLLineStatusList = ({ lineStatuses }) => {
  return (
    <List>
      {lineStatuses.map(line => (
        <TFLLine
          key={line.id}
          lineID={line.id}
          lineName={line.name}
          status={line.lineStatuses}
        />
      ))}
    </List>
  )
}

export default TFLLineStatusList
