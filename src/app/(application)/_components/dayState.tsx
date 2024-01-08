import Image from "next/image";

export default function DayState({ day }: { day: boolean | undefined }) {
  if (day == true) {
    return (
      <div className="flex h-9 w-9 items-center justify-center">
        <Image src="/check.svg" width={13} height={13} alt="check" />
      </div>
    );
  }
  if (day == false) {
    return (
      <div className="flex h-9 w-9 items-center justify-center">
        <Image src="/nocheck.svg" width={13} height={13} alt="nocheck" />
      </div>
    );
  } else {
    return (
      <div className="flex h-9 w-9 items-center justify-center">
        <Image src="/Undefined.svg" width={8} height={8} alt="undefined" />
      </div>
    );
  }
}
