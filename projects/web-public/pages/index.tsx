import { Text } from "@rai/design-system/components/Text"
import { sum } from "@rai/utils/math/sum"

export default function HomeScreen() {
  return (
    <main>
      <Text tag="h1">Home</Text>
      <Text tag="p">Importando modulo local: @rai/utils/math/sum sum(2, 2): {sum(2, 2)} </Text>
    </main>
  );
}
