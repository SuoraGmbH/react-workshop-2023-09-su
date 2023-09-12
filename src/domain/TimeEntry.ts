import { z } from "zod";

export default interface TimeEntry {
  id: string;
  comment: string;
  start: Date;
  end: Date;
}

export type TimeEntryCreate = Omit<TimeEntry, "id"> & {
  barbarasKey: "4711";
};

const f: TimeEntryCreate = {
  barbarasKey: "4711",
};

export const timeEntrySchema = z.object({
  id: z.string(),
  comment: z.string().emoji("Kommentare müssen immer emoji sein"),
  start: z.string().pipe(z.coerce.date()),
  end: z.string().pipe(z.coerce.date()),
});

export const timeEntryCreateSchema = timeEntrySchema.omit({
  id: true,
});
