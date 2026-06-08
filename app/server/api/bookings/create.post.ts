import { pool } from "~/server/db";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { pickup_location, travel_date, mobile_number } = body;

  const result = await pool.query(
    `
      INSERT INTO bookings
      (
        pickup_location,
        travel_date,
        mobile_number
      )
      VALUES ($1,$2,$3)
      RETURNING *
    `,
    [
      pickup_location,
      travel_date,
      mobile_number
    ]
  );

  return {
    success: true,
    booking: result.rows[0],
  };
});