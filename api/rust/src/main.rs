#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;
use rocket::http::Method;
use rocket_cors::{AllowedOrigins, CorsOptions};
use rocket_contrib::json::Json;
// use serde::Deserialize;
use serde::Serialize;
use chrono::Utc;

#[derive(Serialize)]
struct ResData {
    data: Data
}

#[derive(Serialize)]
struct Data {
    datetime: String,
}

#[get("/time")]
fn time() -> Json<ResData> {
    let data = Data {
        datetime: Utc::now().to_rfc3339()
    };

    let res = ResData {
        data: data
    };
    Json(res)
}

fn main() {
    let cors = CorsOptions::default()
    .allowed_origins(AllowedOrigins::all())
    .allowed_methods(
        vec![Method::Get, Method::Post, Method::Patch]
            .into_iter()
            .map(From::from)
            .collect(),
    )
    .allow_credentials(true);

    rocket::ignite()
        .attach(cors.to_cors().unwrap())
        .mount("/", routes![time])
        .launch();
}
