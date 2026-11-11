"use client";
import { useRef, type ReactNode } from "react";
import type { MemberT } from "@/lib/schema";
import { IconLinkedIn, IconMail } from "./Icons";

/**
 * Leadership / analyst / contact card. `avatar` is rendered on the server (so the photo check runs at build).
 * When a bio exists, clicking the card opens it in a small overlay.
 */
export default function TeamCard({
  member,
  avatar,
  size = "lg",
  showEmail = false,
}: {
  member: MemberT;
  avatar: ReactNode;
  size?: "lg" | "sm";
  showEmail?: boolean;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const hasBio = Boolean(member.bio);
  const id = `bio-${member.name.replace(/\W+/g, "-").toLowerCase()}`;

  const body = (
    <>
      {avatar}
      <div className={size === "lg" ? "p-5" : "p-4"}>
        <h3 className={size === "sm" ? "!text-base" : ""}>{member.name}</h3>
        <p className="mt-1 text-[14px] font-semibold text-blue-bright">{member.role}</p>
        <p className="text-[14px]">{member.major}</p>
      </div>
    </>
  );

  return (
    <li className="group card flex flex-col">
      {hasBio ? (
        <button
          type="button"
          className="flex-1 cursor-pointer text-left"
          aria-haspopup="dialog"
          aria-controls={id}
          onClick={() => dialogRef.current?.showModal()}
        >
          {body}
          <span className="sr-only">: read bio</span>
        </button>
      ) : (
        <div className="flex-1">{body}</div>
      )}

      {(member.linkedin || (showEmail && member.email)) && (
        <div className={`flex flex-col gap-1.5 border-t border-line text-[14px] ${size === "lg" ? "px-5 py-4" : "px-4 py-3"}`}>
          {showEmail && member.email && (
            <a href={`mailto:${member.email}`} className="link inline-flex items-center gap-2 break-all">
              <IconMail className="size-4 shrink-0" /> {member.email}
            </a>
          )}
          {member.linkedin && (
            <a href={member.linkedin} className="link inline-flex items-center gap-2" rel="noopener">
              <IconLinkedIn className="size-4 shrink-0" /> LinkedIn<span className="sr-only">: {member.name}</span>
            </a>
          )}
        </div>
      )}

      {hasBio && (
        <dialog
          ref={dialogRef}
          id={id}
          aria-labelledby={`${id}-name`}
          className="bio m-auto w-[min(92vw,480px)] rounded-md border border-line bg-panel p-0 text-mist"
          onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
        >
          <div className="card-accent accent-red relative p-7 pl-9">
            <h3 id={`${id}-name`}>{member.name}</h3>
            <p className="mt-1 text-[14px] font-semibold text-blue-bright">
              {member.role} · {member.major}
            </p>
            <p className="mt-4">{member.bio}</p>
            <form method="dialog" className="mt-6">
              <button className="btn btn-secondary !h-10" autoFocus>Close</button>
            </form>
          </div>
        </dialog>
      )}
    </li>
  );
}
