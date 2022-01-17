FROM rust:1.31

RUN useradd -ms /bin/bash rustuser
USER rustuser
WORKDIR /home/rustuser/app

COPY --chown=rustuser:rustuser *.toml *.toml
# RUN cargo install --path .
COPY --chown=rustuser:rustuser . .

RUN rustup default nightly
RUN cargo build --release
CMD ["cargo", "run"]